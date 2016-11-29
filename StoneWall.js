function solution(H) {
    var count = 0;
    var blocks = [];  //Stack of current blocks
    
    //Initialize first block
    blocks.push(H[0]);
    count++;
    
    // Loop through and add a block if the height is different from the previous i.
    for (var i = 1; i < H.length; i++) {
        // If the current height is lower, pop blocks off the stack.
        while (H[i] < blocks[blocks.length - 1] && blocks.length > 0 ) 
            blocks.pop();
            
        if (H[i] != blocks[blocks.length - 1]) {
            blocks.push(H[i]);
            count++;
        }
     }
    
    return count;
}
