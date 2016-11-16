const MAX = 10000000;

function solution(A) {
    var disks = [];
    var start, end;
    var activeDisks = 0;
    var intersections = 0;
    
    /* Initial an arrays of disks with zero-ed start and end points. */
    for (i = 0; i < A.length; i++) {
        disks.push([0,0]);  
    }
    
    /* Based on the start and end points for each disk, create an array of disks for each point.
    *  Avoid adding < 0 or > array length
    */
    for (i = 0; i < A.length; i++) {
        start = i > A[i] ? i - A[i] : 0;
        end = i + A[i] < A.length - 1 ? i + A[i] : A.length - 1;
        disks[start][0]++;
        disks[end][1]++;
    }
    
    /* Loop through each point.  Count the number of intersections based on the amount of active disks.
    *  Afterwards update the number of active disks based on the start and end points.
    */
    for (j = 0; j < A.length; j++) {
        intersections += activeDisks * disks[j][0]; // Add intersections from the new discs and currently active disks.
        intersections += disks[j][0] > 0 ? disks[j][0] * (disks[j][0] - 1) / 2 : 0;  // Add intersections between the newly added disks.
        activeDisks += disks[j][0];  // Update added disks
        activeDisks -= disks[j][1];  // Update removed disks
        if (intersections > MAX) {
            intersections = -1;
            break;
        }
    }
    
    return intersections;
}
