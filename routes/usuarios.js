const { Router } = require('express');
const { getUsuarios, 
        createUsuario, 
        updateUsuario, 
        deleteUsuario,  } = require('../controllers/usuarios');
const router = Router();


router.get('/', getUsuarios);

router.put('/:id', updateUsuario);

router.post('/', createUsuario);

router.delete('/', deleteUsuario);



module.exports = router;