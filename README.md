# FileManager
node js file manager

## to run app 
` npm run start -- --username=your_username `

## ! When name has a space in it use double quotes:  ` cd "path to file" `

   # List of operations and their syntax:
- Navigation & working directory (nwd)
  
    #### ` up ` Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)  
 
    #### ` cd path_to_directory ` Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)


    #### ` ls ` Print in console list of all files and folders in current directory. List should contain:
        - list should contain files and folder names (for files - with extension)
        - folders and files are sorted in alphabetical order ascending, but list of folders goes first
        - type of directory content should be marked explicitly (e.g. as a corresponding column value)

- Basic operations with files
    #### ` cat path_to_file ` Read file and print it's content in console (should be done using Readable stream): 
  
    #### ` add new_file_name ` Create empty file in current working directory: 

    #### ` rn path_to_file new_filename ` Rename file (content should remain unchanged): 
    
    #### ` cp path_to_file path_to_new_directory ` Copy file (should be done using Readable and Writable streams): 
   
    #### ` mv path_to_file path_to_new_directory ` Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams): 
 
    #### ` rm path_to_file ` Delete file: 

- Operating system info (prints following information in console)

    #### ` os `
    ` --EOL ` Get EOL (default system End-Of-Line) and print it to console  
 
    ` --cpus ` Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console  
    
   ` --homedir ` Get home directory and print it to console  
   
    ` --username ` Get current *system user name* (Do not confuse with the username that is set when the application starts) and print it to console  
   
   ` --architecture ` Get CPU architecture for which Node.js binary has compiled and print it to console  
   
- Hash calculation  
    #### ` hash path_to_file ` Calculate hash for file and print it into console  
    
- Compress and decompress operations 
    #### ` compress path_to_file path_to_destination `Compress file (using Brotli algorithm, should be done using Streams API)  
    
    ####  ` decompress path_to_file path_to_destination ` Decompress file (using Brotli algorithm, should be done using Streams API)  
     
    NB! After decompressing of previously compressed file result should not differ with originally compressed file
    
