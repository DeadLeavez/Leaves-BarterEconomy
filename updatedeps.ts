import path from "path";
import { VFS } from "./src/deps/VFS";

async function main()
{
    let vfs = new VFS();
    const currentDir = path.dirname(__filename);
    vfs.copyDir(currentDir + "/../Deps/files", currentDir + "/src/deps/")
}

main();