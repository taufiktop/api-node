import Profile from "../app/models/Profile.js";

export const getProfiles = async (req, res) => {
    try {
        const profile = await Profile.findAll();
        res.send(profile);
    } catch (err) {
        console.log(err);
    }
}


console.info(await Profile.findAll());