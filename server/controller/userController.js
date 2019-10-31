const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const { email, password, username } = req.body;
    const db = req.app.get("db");
    const foundUser = await db.find_user_by_email(email);
    if (foundUser.length) {
      res.status(400).send("User already exists");
    } else {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt)
      const [newUser] = await db.create_user([email, hashedPassword, username])
    //   req.session.user = newUser[0];
      req.session.user = newUser;
      res.status(200).send(req.session.user);
    }
  },
  login: (req, res) => { 
    const { email, password } = req.body
    const db = req.app.get('db')
    db.find_user_by_email(email).then(([foundUser]) => {
        if(!foundUser) {
            res.status(400).send("User not found")
        } else {
            bcrypt.compare(password, foundUser.password).then(isAuthenticated => {
                if(isAuthenticated) {
                    req.session.user = {
                        user_id: foundUser.user_id,
                        username: foundUser.username,
                        email: foundUser.email
                    }
                    res.status(200).send(req.session.user)
                } else {
                    res.status(400).send("QUIT TRYING TO STEAL MY BODY PARTS")
                }
            })
        }
    })
  },
  logout: (req, res) => {
      req.session.destroy()
      res.status(200).send("Hope you enjoy your new body part!")
  },
  userSession: (req, res) => {
      res.status(200).send(req.session.user)
  }
};
