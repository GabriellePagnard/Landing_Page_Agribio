// models/newsletter.js

module.exports = (sequelize, DataTypes) => {
  const Newsletter = sequelize.define('Newsletter', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Vérifie que le format est bien un email
      },
    },
  }, {
    // Options supplémentaires
    tableName: 'Newsletters', // Nom de la table dans la base de données
    timestamps: true, // Gère automatiquement les colonnes createdAt et updatedAt
  });

  return Newsletter;
};
