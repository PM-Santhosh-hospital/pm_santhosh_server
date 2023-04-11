const ContactEnquiry = require("../model/contactenquiry");

exports.ContactEnquiry = async (req, res) => {
  console.log(req.body);

  const {email} = req.body
  try {

    const exist_email = await ContactEnquiry.findOne({email})
    if(exist_email){
      return res.status(401).json({msg:"Email already exists"})
    }
    const enquiry = new ContactEnquiry(req.body);


    await enquiry.save();
    console.log("Contact enquiry");

    res
      .status(201)
      .json({
        msg: "Your enquiry has been submitted successfully, we will get in touch with you",
        enquiry,
      });
  } catch (err) {
    console.log(err);
    res.status(401).json({ err: "Something went wrong !", err });
  }
};

exports.getAllContact = async (req, res) => {
  try {
    const enquiry = await ContactEnquiry.find().sort({ createdAt: -1 });
    res.status(201).json(enquiry);
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: "Something went Wrong!", error });
  }
};
