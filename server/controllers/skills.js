import express from 'express';import mongoose from 'mongoose';
import SkillModel from '../models/skills.js';

export const createSkill = async (req, res) => {
  try {
    console.log('Aqui');
    const skill = req.body;
    const newSkill = new SkillModel(skill);
    await newSkill.save();
    console.log(newSkill);
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
