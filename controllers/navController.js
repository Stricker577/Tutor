//index page for the website
exports.index = (req, res)=>{
    res.render('./index', { userinfo: req.user });
}

exports.about = (req, res)=>{
    res.render('navigation/about');
}

exports.contact = (req, res)=>{
    res.render('navigation/contact');
}

exports.home_page = (req, res)=>{
    res.render('navigation/home_page');
}

exports.students = (req, res)=>{
    res.render('navigation/students');
}

exports.appointments = async (req, res) => {
    res.render('navigation/appointments');
}

exports.create_account = (req, res)=>{
    res.render('user/create_account');
}

exports.add_appointment = async (req, res) => {
      res.render('navigation/add_appointment'); 
}

exports.add_student = (req, res)=>{
    res.render('navigation/add_student');
}