import RandomDataSchema from "../models/RandomData";

const getData = async (req, res) => {
  const { page } = req.query;
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;

  console.log(page);
  try {
    const data = await RandomDataSchema.find({})
      .limit(pageSize)
      .skip(startIndex)
      .exec();
    console.log(data);
    res.status(200).json({ msg: " data successfully get", data: data });
  } catch (error) {
    res.status(500).json({ msg: "Error while getting  data", error: error });
  }
};

export default getData;
