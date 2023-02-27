const Profile = require("../model/profileModel");

const CreateProfile = async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  try {
    if (!name || !email || !phone) {
      return res.status(400).json("Please provide your credentials.");
    }
    const profile = await Profile.create(req.body);

    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
  }
};

const GetProfile = async (req, res) => {
  const { id } = req.params.id;
  try {
    const profile = await Profile.find({ phone });
    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { CreateProfile, GetProfile };
