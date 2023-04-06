const ContactEnquiry = require("../model/contactenquiry");

exports.ContactEnquiry = async (req, res) => {
  console.log(req.body);

  try {
    const enquiry = new ContactEnquiry(req.body);

    await enquiry.save();
    console.log("Contact enquiry");

    res
      .status(201)
      .json({
        msg: "Your enquiry has been submitted successfully, we will get in touch with you",
        enquiry,
      });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: "Something went wrong !", error });
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
