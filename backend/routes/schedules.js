const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// GET - pobierz wszystkie grafiki
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

// GET - pobierz pojedynczy grafik po ID
router.get('/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) return res.status(404).json({ error: 'Nie znaleziono grafiku' });
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera 111' });
  }
});

// POST - dodaj nowy grafik
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newSchedule = new Schedule({ name, description });
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

// PUT - zaktualizuj istniejący grafik
router.put('/:id', async (req, res) => {
  try {
    const { name, description } = req.body;
    const schedule = await Schedule.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    if (!schedule) return res.status(404).json({ error: 'Nie znaleziono grafiku' });
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

// DELETE - usuń grafik
router.delete('/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);
    if (!schedule) return res.status(404).json({ error: 'Nie znaleziono grafiku' });
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

module.exports = router;
