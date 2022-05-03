import express from 'express';
import mongoose from 'mongoose';
import SkillModel from '../models/skills.js';

export const createSkill = async (req, res) => {
  try {
    const skill = req.body;
    const newSkill = new SkillModel(skill);
    await newSkill.save();
    console.log(newSkill);
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getSkills = async (req, res) => {
  try {
    const skills = await SkillModel.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const { _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ message: 'skill id not found' });

    const { _id: idDeleted } = await SkillModel.findByIdAndRemove(_id);

    res.status(200).json({ idDeleted });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const skill = req.body;
    if (!mongoose.Types.ObjectId.isValid(skill._id)) return res.status(404).json({ message: 'skill id not found' });
    const updatedSkill = await SkillModel.findByIdAndUpdate(skill._id, skill, { new: true });
    console.log(updatedSkill.name);
    res.status(201).json(updatedSkill);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
