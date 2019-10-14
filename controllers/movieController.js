const { sqlDB } = require('../database')

module.exports = {
    geMovie: (req, res) => {
        var sql = `SELECT * FROM movies`

        sqlDB.query(sql , (err, results) => {
            if(err) return res.status(500).send('Gagal MAZ')

            res.status(200).send(results)
        })
    },
    getCategory: (req, res) => {
        var sql = `SELECT * FROM categories`

        sqlDB.query(sql , (err, results) => {
            if(err) return res.status(500).send('Gagal MAZBro')

            res.status(200).send(results)
        })        
    },
    getMovcat: (req, res) => {
        var sql = `select namaMovie, namaCat
                    from movies m 
                    join movcat mc on m.id = mc.idmovie
                    join categories c on c.id = mc.idcategories;
                    `

        sqlDB.query(sql , (err, results) => {
            if(err) return res.status(500).send('Gagal MAZBro')

            res.status(200).send(results)
        })
    },
    postMovie: (req, res) => {
        var sql = `INSERT INTO movies SET ?`
        sqlDB.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send('Gagal CAK')

            res.status(200).send('Berhasil CAK')
        })
    },
    postCategory: (req, res) => {
        var sql = `INSERT INTO categories SET ?`
        console.log(req.body)
        sqlDB.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send('Gagal CAK')

            res.status(200).send('Berhasil CAK')
        })
    },
    updateMovie: (req, res) => {
        var sql = `UPDATE movies SET ? WHERE id = 1`
        console.log(req.body)
        sqlDB.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send('gagal mz')

            res.status(200).send('Masuk mz')
        })
    },
    updateCategory: (req, res) => {
        var sql = `UPDATE categories SET ? WHERE id = 1`
        console.log(req.body)
        sqlDB.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send('gagal mz')

            res.status(200).send('Masuk mz')
        })
    },
    deleteMovie: (req, res) => {
        var sql = `DELETE FROM movies WHERE id = ${req.body.id};`
        var sql2 = `DELETE FROM movcat WHERE idmovie = ${req.body.id};`
    
        sqlDB.query(sql, req.body, (err, results) => {
            if(err){
                return res.status(500).send('gagal mas')
            } else {
                sqlDB.query(sql2, req.body, (err, results) => {
                    if(err) return res.status(500).send('gagal mas')

                    res.status(200).send('Masuk mz')        
                })        
            }

            res.status(200).send('Masuk mz')
        })
    },
    deleteCategory: (req, res) => {
        var sql = `DELETE FROM categories WHERE id = ${req.body.id}`
        var sql2 = `DELETE FROM movcat WHERE idmovie = ${req.body.id};`
        
        sqlDB.query(sql, req.body, (err, results) => {
            if(err){
                return res.status(500).send('gagal masz')
            } else {
                sqlDB.query(sql2, req.body, (err, results) => {
                    if(err) return res.status(500).send('gagal mas')

                    res.status(200).send('Masuk mz')        
                })
            }

            res.status(200).send('Masuk mz')
        })
    },
    deleteMovcat: (req, res) => {
        var sql = `DELETE FROM movcat WHERE id = ${req.body.id}`
        // console.log(req.body)
        sqlDB.query(sql, req.body, (err, results) => {
            if(err) return res.status(500).send('gagal masz')

            res.status(200).send('Masuk mz')
        })
    }
}