const {body} = require('express-validator');
const {validationResult} = require('express-validator');

//check if user is a guest
exports.validateId = (req, res, next)=>{
    let id = req.params.id;
    //an objectId is a 24-bit Hex string
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid item id');
        err.status = 400;
        req.flash('error', err.message);
        res.redirect('back');
        return next(err);
    } else {
        return next();
    }
};
exports.validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      req.flash('error', errorMessages);
      return res.redirect('back');
    }
    return next();
  };

//trim and escape all of the text to guarantee text inserted is not malicious
exports.validateStudent = [body('name', 'Name cannot be empty').notEmpty().trim().escape(),
body('courses', 'Courses cannot be empty').notEmpty().trim().escape(),
body('email', 'Email must be a valid email addresss').isEmail().trim().escape().normalizeEmail()];

//trim and escape all of the text to guarantee text inserted is not malicious
exports.validateAppointment = [body('courses', 'Courses cannot be empty').notEmpty().trim().escape(),
body('date', 'Date cannot be empty').notEmpty().trim().escape()];