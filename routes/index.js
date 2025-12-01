const express = require('express');
const router = express.Router();
const db = require('../db/db'); 

router.get('/', async (req, res) => {
    try {
        const sql = `SELECT id, url FROM portfolio ORDER BY id ASC`;
        const [rows] = await db.query(sql);

        const projects = rows.map(row => ({
            id: row.id,
            link: row.url,
        }));

        console.log("DB 데이터:", projects); 

        res.render('index', { projects });
    } catch (err) {
        console.error(err);
        res.send('DB 연결 에러');
    }
});

module.exports = router; 