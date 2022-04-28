/** @format */

import { DataTypes } from "sequelize";

export const PostModel = (sequelize) => {
  const Post = sequelize.define(
    "Posts",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postText: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Posts",
    }
  );
  //
  sequelize.sync();
  //
};
