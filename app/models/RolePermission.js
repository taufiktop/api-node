import { Sequelize } from "sequelize";
import db from "../database.js";

const { DataTypes } = Sequelize;
 
// Define schema
const RolePermission = db.define('role_permission', {
  // Define attributes
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  permission_slug: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
},
{
    tableName: 'role_permission',
    // timestamps: true,
    // createdAt:'created_on',
    // updatedAt:'updated_on'
});
// const RolePermission = db.query('SELECT * FROM role_permission WHERE role_id = 2');


export default RolePermission;