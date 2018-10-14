
const express = require('express');
const router = express();

router.get('/yaml', (req, res) => {
    res.status(200).json({ 
        status: 200, 
        workloadName: "cockroachdb",
        nameSpaceyaml: "https://raw.githubusercontent.com/bhaskarhc/yaml-cockroach/master/cock-namespace.yaml",
        workloadyaml:"https://raw.githubusercontent.com/bhaskarhc/yaml-cockroach/master/cockroachdb-sts.yaml"
 });
});



module.exports = router;