import fs from "fs";
import path from "path";

function deleteZoneIdentifierFiles(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Erro ao ler o diretório ${directory}:`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file.name);

      if (file.isDirectory()) {
        // Se for uma pasta, entra recursivamente
        deleteZoneIdentifierFiles(filePath);
      } else if (file.name.endsWith(".Zone.Identifier")) {
        // Se for um arquivo .Zone.Identifier, apaga
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Erro ao excluir ${filePath}:`, err);
          } else {
            console.log(`🗑️  Removido: ${filePath}`);
          }
        });
      }
    });
  });
}

// Inicia a remoção na pasta atual
deleteZoneIdentifierFiles(process.cwd());
