var db = require('../utils/db');

module.exports = {
    all: () => {
        return db.load('select * from tbldanhmucbaiviet');
    },

    allWithDetails: () => {
        return db.load(`select dm.*,count(bv.danhmucbaiviet) as num_of_products
        from tbldanhmucbaiviet dm left join  tblbaiviet bv on dm.id=bv.danhmucbaiviet 
        group by dm.id,dm.danhmucbaiviet`);
    },

    single:id => {
        return db.load(`select * from tbldanhmucbaiviet where id =${id}`);
    },
    /*
    params {*} entity {catname:...}  
      */
    add: entity=> {
        return db.add('categories', entity);
    },

    /*
    params {*} entity {catname,catid}  
      */
     update: entity => {
         var id = entity.id;
         delete entity.id;
         return db.update('categories','id' ,entity,id);
    },

    delete: id => {
        return db.delete('categories', 'id', id);
      }



};