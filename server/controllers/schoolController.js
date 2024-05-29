const School = require('../models/school');
const {Documents} = require('../models/documents');
const {Storage} = require("../helper/storage.helper");
const uuid = require('uuid');
const mime = require('mime');

function handleException(req, err) {
    const errorMessage = `An error occurred while processing the request: ${err.message}`;
    return {error: errorMessage};
}


//create new school
const createSchool = async (req, res) => {
    const {userId, title, description} = req.body;
    let file = req?.files?.coverImage;
    console.log(file);
    let imageS3;
    try {
        if (title && title.length > 0) {
            let path = "images/";
            if (file) {
                let fileKye = uuid.v1() + "." + file.name.split(".")[1];
                path = path + fileKye;
                Storage.init().s3().uploadFile(path, file, async (err, data) => {
                    if (err) {
                        console.log(err, "this is error")
                        return res.status(500).json(await handleException(req, err));
                    }
                    let fileExtension = file.name.split('.').pop().toLowerCase();
                    let mimeType = mime.getType(fileExtension);
                    let fileType = mimeType.split('/')[0];
                    if (!mimeType) {
                        mimeType = 'application/octet-stream';
                    }
                    try {
                        imageS3 = await Documents.create({
                            name: file.name,
                            filename: fileKye,
                            path: path,
                            storage: "S3",
                            size: file.size,
                            mime: mimeType,
                            type: fileType,
                        })
                        const newSchool = new School({
                            createdBy: userId,
                            title,
                            description,
                            coverImage: imageS3 ? imageS3._id : null
                        });
                        // Save the school to the database
                        await newSchool.save();

                        console.log(imageS3, "image created");
                        res.status(201).json({message: 'School created successfully', school: newSchool});

                    } catch (e) {
                        console.log(e);
                        return res.status(500).json({error: e});
                    }
                })
            } else {
                const newSchool = new School({
                    createdBy: userId,
                    title,
                    description,
                    coverImage: imageS3 ? imageS3._id : null
                });
                // Save the school to the database
                await newSchool.save();
                res.status(201).json({message: 'School created successfully', school: newSchool});

            }
        }

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({error: 'Error creating the school'});
    }
};

//get All schools
const getAllSchools = async (req, res) => {
    try {
        const schools = await School.find().populate("coverImage");
        res.status(200).json(schools);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({error: 'An error occurred while fetching the schools.'});
    }

}

//get School by school id
const getSchoolById = async (req, res) => {
    try {
        const school = await School.findById(req.params.id).populate("coverImage");
        res.status(200).json(school);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({error: 'An error occurred while finding this school.'});
    }
}

//get All School by User id
const getAllSchoolByUserId = async (req, res) => {
    try {
        const school = await School.find({createdBy: req.params.id}).populate("coverImage");
        res.status(200).json(school);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({error: 'An error occurred while finding this school.'});
    }
}


//update School by id
const updateSchoolById = async (req, res) => {
    console.log(req.body);
    try {
        const school = await School.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(school);
    } catch (error) {
        console.log("Error:", error);
    }
}

//delete school by school id
const deleteSchoolById = async (req, res) => {
    try {
        await School.findByIdAndDelete(req.params.id);
        console.log("school deleted");
        res.status(204).json({message: "School Deleted Successfully"});
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({error: 'An error occurred while deleting the school.'});
    }
}


module.exports = {
    createSchool,
    getAllSchools,
    getSchoolById,
    updateSchoolById,
    deleteSchoolById,
    getAllSchoolByUserId, //not checked yet

}