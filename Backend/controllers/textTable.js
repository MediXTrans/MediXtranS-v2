import { TextTable } from "../models/textTable.js";
export const generateText = async (req, res, next) => {
  try {
    console.log(req.body);
    const {text_data} = req.body;
    const newTable = await TextTable.create({
      text_data,
    });
    res.status(201).json({ text_id: newTable._id, created: true });
  } catch (err) {
    next(err);
  }
};

export const getText = async (req, res, next) => {
  try {
    const allTexts = await TextTable.find();
    res.status(200).json(allTexts);
  } catch (err) {
    next(err);
  }
};

export const lastText = async (req, res, next) => {
  try {
    const lastElement = await TextTable.findOne().sort({ _id: -1 });
    res.status(200).json(lastElement);
  } catch (err) {
    next(err);
  }
};

export const getTextById = async (req, res, next) => {
  try {
    const text = await TextTable.findById(req.params.id);
    res.status(200).json(text);
  } catch (err) {
    next(err);
  }
};

export const updateText = async (req, res, next) => {
  try {
    const { text_data } = req.body;
    const updatedText = await TextTable.findByIdAndUpdate(
      req.params.id,
      { text_data },
      { new: true }
    );
    res.status(200).json(updatedText);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteText = async (req, res, next) => {
  try {
    const deletedText = await TextTable.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedText);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
