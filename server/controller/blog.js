const Blog = require("../model/blogs");

/***********Create Blog */
exports.createBlog = async (req, res) => {
  console.log(req.body);
  try {
    const blog = new Blog(req.body);
    await blog.save();

    res.status(201).json({ msg: "Blog Created Successfully", blog });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: "Something went Wrong!", error });
  }
};

/**********Get All Blog */
exports.getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(201).json(blog);
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: "Something Went Wrong!", error });
  }
};

/*************get one Blog */

exports.getOneBlog = async (req, res) => {
  const  id=req.params.id
  console.log({id})
  var ID=''
  for (let i=0; i<id.length; i++)
  {
    if (id[i]==="_")
ID=ID+' '
else{
  ID=ID+id[i]
}}
  // let i =0;
  // while (i<id.length){
  //   if(id[i]==='_'){
  //     ID=ID+' '
  //   }else{
  //     ID=ID+id[i]
  //   } 
  //   i++
  // }
  
  console.log({ID})
  try {
    const blog = await Blog.findOne({title:ID});
    res.status(201).json(blog);
  } catch (error) {
    res.status(401).json({ err: "Something Went Wrong!!", error });
  }
}
/***********Update Blog */
exports.updateBlog = async (req, res) => {
  console.log(req.params);
  console.log(req.body)
  try {
    await Blog.updateOne({ _id: req.params.id }, req.body);
    res.status(201).json({ msg: "Blog Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: "Something Went Wrong!!", error });
  }
};

/***********Delete Blog */
exports.deleteBlog = async (req, res) => {
  console.log(req.params.id);
  try {
    const blog = await Blog.findByIdAndDelete({ _id: req.params.id });
    res.status(201).json({ msg: "Blog deleted Successfully", blog });
  } catch (error) {
    res.status(401).json({ err: "Something went Wrong!!", error });
  }
};


// ---------------------------------------
// exports.getOneBlog = async (req, res) => {
//   try {
//     console.log(req.params.id)
//     const blog = await Blog.findOne({title:req.params.id});
//     res.status(201).json(blog);
//   } catch (error) {
//     res.status(401).json({ err: "Something Went Wrong!!", error });
//   }
// };