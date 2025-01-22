const express = require("express");
const router = express.Router();
const { Tag, Product } = require("../../models");

// The `/api/tags` endpoint

/**
 * GET /api/tags
 * Purpose: Fetch all tags and their associated products.
 */
router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving tags", error: err.message });
  }
});

/**
 * GET /api/tags/:id
 * Purpose: Fetch a specific tag by id and its associated products.
 */
router.get("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tag) {
      return res.status(404).json({ message: "No tag found with that ID" });
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving the tag", error: err.message });
  }
});

/**
 * POST /api/tags
 * Purpose: Create a new tag.
 * Example Request Body: { "tag_name": "New Tag" }
 */
router.post("/", async (req, res) => {
  try {
    const { tag_name } = req.body;

    if (!tag_name) {
      return res.status(400).json({ message: "Tag name is required" });
    }

    const newTag = await Tag.create({ tag_name });
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json({ message: "Error creating the tag", error: err.message });
  }
});

/**
 * PUT /api/tags/:id
 * Purpose: Update a tag’s name by id.
 */
router.put("/:id", async (req, res) => {
  try {
    const { tag_name } = req.body;

    if (!tag_name) {
      return res.status(400).json({ message: "Tag name is required" });
    }

    const [updatedRows] = await Tag.update(
      { tag_name },
      { where: { id: req.params.id } }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: "No tag found with that ID" });
    }

    res.json({ message: "Tag updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating the tag", error: err.message });
  }
});

/**
 * DELETE /api/tags/:id
 * Purpose: Delete a tag by its id.
 */
router.delete("/:id", async (req, res) => {
  try {
    const deletedRows = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: "No tag found with that ID" });
    }

    res.json({ message: "Tag deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting the tag", error: err.message });
  }
});

// Export the Router
module.exports = router;