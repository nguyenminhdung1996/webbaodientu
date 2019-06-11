var db = require('../utils/db');

module.exports = {
    all: () => {
        return db.load('select * from tbldanhmucbaiviet');
    },

    allWithDetails: () => {
        return db.load(`select dm.*,count(bv.IDDM) as num_of_products
        from tbldanhmucbaiviet dm left join  tblbaiviet bv on dm.IDDM=bv.IDDM
        group by dm.IDDM,dm.danhmucbaiviet`);
    },

    single:id => {
        return db.load(`select * from tbldanhmucbaiviet where IDDM =${id}`);
    },
    /*
    params {*} entity {catname:...}  
      */
    add: entity=> {
        return db.add('tbldanhmucbaiviet', entity);
    },

    /*
    params {*} entity {catname,catid}  
      */
     update: entity => {
         var id = entity.IDDM;
         delete entity.IDDM;
         return db.update('tbldanhmucbaiviet','IDDM' ,entity,id);
    },

    delete: id => {
        return db.delete('tbldanhmucbaiviet', 'IDDM', id);
      }



};