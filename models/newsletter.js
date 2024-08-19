/**
 * Modèle Sequelize pour la table des newsletters
 * @module models/newsletter
 */

module.exports = (sequelize, DataTypes) => {
  const Newsletter = sequelize.define('Newsletter', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Garantit que l'email est unique
      validate: {
        isEmail: true, // Vérifie que le format est bien un email
      },
    },
  }, {
    // Options supplémentaires pour la configuration du modèle
    tableName: 'Newsletters', // Nom de la table dans la base de données
    timestamps: true, // Gère automatiquement les colonnes createdAt et updatedAt
  });

  return Newsletter;
};
