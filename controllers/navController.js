//index page for the website
exports.index = (req, res)=>{
    res.render('./index');
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