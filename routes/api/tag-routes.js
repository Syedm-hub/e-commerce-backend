const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

router.get("/", (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
    },
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
    },
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((tagData) => {
      if (!tagData) {
        res.status(404).json({ message: "No Tag found! Wrong Tag!" });
        return;
      }
      res.json(tagData);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tagData) => {
      if (!tagData) {
        res.status(404).json({ message: "No Tag found! Wrong Tag!" });
        return;
      }
      res.json(tagData);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
