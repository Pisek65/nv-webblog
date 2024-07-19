module.exports = {
    index(req, res) {
        res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด');
    },
    create(req, res) {
        res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body));
    },
    put(req, res) {
        res.send('แก้ไข user คนที่ : ' + req.params.userId + ' ข้อมูลที่แก้ไข : ' + JSON.stringify(req.body));
    },
    remove(req, res) {
        res.send('ลบ user คนที่ ' + req.params.userId );
    },
    show(req, res) {
        res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด');
    }
}