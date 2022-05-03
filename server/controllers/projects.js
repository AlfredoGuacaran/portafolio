import express from 'express';
import mongoose from 'mongoose';
import ProjectModel from '../models/projects.js';

export const createProject = async (req, res) => {
  try {
    const project = req.body;
    const newProject = new ProjectModel(project);
    await newProject.save();
    console.log(newProject);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ message: 'skill id not found' });

    const { _id: idDeleted } = await ProjectModel.findByIdAndRemove(_id);

    res.status(200).json({ idDeleted });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
