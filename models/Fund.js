const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fund extends Model {}

Fund.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    member_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "member",
        key: "id",
      },
    },
    stock_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    initial_cost: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: true,
    },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   //note here this is the guy that you are looking for
    //   get() {
    //     return moment(this.getDataValue("createdAt")).format(
    //       "DD/MM/YYYY h:mm:ss"
    //     );
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "fund",
  }
);

module.exports = Fund;
