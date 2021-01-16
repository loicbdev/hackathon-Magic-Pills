const express = require('express');
const connection = require('../config');

const router = express.Router();


/* filter sub-categories */

router.get('/categories/inutile/max-effet', (req, res) => {
    connection.query(
      `SELECT * FROM super_pouvoir sp JOIN categorie cat ON sp.categorie_idcategorie = cat.idcategorie WHERE cat.name = "inutile" AND time <= ?`,
      [req.query.duree],
        (error, result) => {
          if (error) {
            res.status(500).json({ errorMessage: error.message });
          } else {
            res.status(201).json({...result});
          }
        }
      );
    }
  );
  
  /* filter categories */
  
  router.get('/categories/inutile', (req, res) => {
    connection.query(
      `SELECT * FROM super_pouvoir sp JOIN categorie cat ON sp.categorie_idcategorie = cat.idcategorie WHERE cat.name = "inutile"`,
        (error, result) => {
          if (error) {
            res.status(500).json({ errorMessage: error.message });
          } else {
            res.status(201).json({...result});
          }
        }
      );
    }
  );
  
  router.get('/categories/environnemental', (req, res) => {
    connection.query(
      `SELECT * FROM super_pouvoir sp JOIN categorie cat ON sp.categorie_idcategorie = cat.idcategorie WHERE cat.name = "environnemental"`,
        (error, result) => {
          if (error) {
            res.status(500).json({ errorMessage: error.message });
          } else {
            res.status(201).json({...result});
          }
        }
      );
    }
  );
  
  router.get('/categories/corporel', (req, res) => {
    connection.query(
      `SELECT * FROM super_pouvoir sp JOIN categorie cat ON sp.categorie_idcategorie = cat.idcategorie WHERE cat.name = "corporel"`,
        (error, result) => {
          if (error) {
            res.status(500).json({ errorMessage: error.message });
          } else {
            res.status(201).json({...result});
          }
        }
      );
    }
  );
  
  router.get('/categories/classique', (req, res) => {
    connection.query(
      `SELECT * FROM super_pouvoir sp JOIN categorie cat ON sp.categorie_idcategorie = cat.idcategorie WHERE cat.name = "classique"`,
        (error, result) => {
          if (error) {
            res.status(500).json({ errorMessage: error.message });
          } else {
            res.status(201).json({...result});
          }
        }
      );
    }
  );
  
  router.get('/categories/flippant', (req, res) => {
    connection.query(
      `SELECT * FROM super_pouvoir sp JOIN categorie cat ON sp.categorie_idcategorie = cat.idcategorie WHERE cat.name = "flippant"`,
        (error, result) => {
          if (error) {
            res.status(500).json({ errorMessage: error.message });
          } else {
            res.status(201).json({...result});
          }
        }
      );
    }
  );
  
  /* super_power list */
  
  router.get('/:category', (req, res) => {
    connection.query(
      `SELECT * FROM super_pouvoir sp JOIN catégorie cat ON sp.catégorie_idcatégorie = cat.idcatégorie WHERE cat.name = ?`,
      [req.params.category],
      (error, result) => {
        if (error) {
          res.status(500).json({ errorMessage: error.message });
        } else {
          res.status(201).json(result);
        }
      }
    );
  });
  
  router.get('/', (request, response) => {
    connection.query('SELECT * FROM super_pouvoir', (error, result) => {
      if (error) {
        response.status(500).send(error);
      }
      if (result.lenght === 0) {
        response.sendStatus(404);
      } else {
        response.status(200).json(result);
      }
    });
  });
  
  router.get('/power/:id', (req, res) => {
    connection.query(
      `SELECT * FROM super_pouvoir WHERE idsuper_pouvoir = ?`,
      [req.params.id],
      (error, result) => {
        if (error) {
          res.status(500).send(error);
        } else if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.status(200).json(result[0]);
        }
      }
    );
  });
  
  router.get('/produit/:slug', (req, res) => {
    connection.query(
      `SELECT * FROM super_pouvoir WHERE slug = ? `,
      [req.params.slug],
      (error, result) => {
        if (error) {
          res.status(500).send(error);
        } else if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.status(200).json(result[0]);
        }
      }
    );
  });
  
  // GET - Ordered data recovery (i.e. ascending, descending)
  // EX : http://localhost:8080/prices/order/ASC ou http://localhost:8080/prices/order/asc
  
  router.get('/prix/:value', (req, res) => {
    let order = 'ASC';
    if (req.params.value.toLowerCase() === 'desc') {
      order = 'DESC';
    }
    connection.query(
      `SELECT * FROM super_pouvoir ORDER BY prix ${order}`,
      (error, result) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).json(result);
        }
      }
    );
  });




module.exports = router;