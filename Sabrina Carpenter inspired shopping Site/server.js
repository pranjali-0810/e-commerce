const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.post('/api/checkout', (req, res) => {
    res.json({ success: true, message: "Order placed! Your Pop gear is on the way 💋" });
});

app.listen(3000, () => console.log(`✨ Store live at http://localhost:3000`));