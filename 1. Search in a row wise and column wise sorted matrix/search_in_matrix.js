// Approach: The simple idea is to traverse the array and to search elements one by one.
// Algorithm: 
// 1. Run a nested loop, outer loop for row and inner loop for the column
// 2. Check every element with x and if the element is found then print “element found”
// 3. If the element is not found, then print “element not found”.


//------SOLUTION1---------//
let mat = [[ 10, 20, 30, 40 ],
[15, 25, 35, 45] ,
[ 27, 29, 37, 48 ],
[ 32, 33, 39, 50 ]];

search(mat, 4, 29);

function search(mat,n,x) {
    if (n == 0)
        return -1;
 
    // traverse through the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++)
            // if the element is found
            if (mat[i][j] == x) {
                 document.write("Element found at ("
                           + i + ", " + j
                           + ")<br>");
              return 1;
        }
    }
 
       document.write(" Element not found");
    return 0;
}
// Time complexity : O(n2)

//-------------SOLUTION2-----------//

// The simple idea is to remove a row or column in each comparison until an element is found. Start searching from the top-right corner of the matrix. There are three possible cases. 
// 1. The given number is greater than the current number: This will ensure that all the elements in the current row are smaller than the given number as the pointer is already at the right-most elements and the row is sorted. Thus, the entire row gets eliminated and continues the search for the next row. Here, elimination means that a row needs not be searched.
// 2. The given number is smaller than the current number: This will ensure that all the elements in the current column are greater than the given number. Thus, the entire column gets eliminated and continues the search for the previous column, i.e. the column on the immediate left.
// 3. The given number is equal to the current number: This will end the search.
   

let mat = [[ 10, 20, 30, 40 ],
[15, 25, 35, 45] ,
[ 27, 29, 37, 48 ],
[ 32, 33, 39, 50 ]];

search(mat, 4, 29);

function search(mat,n,x){
         
    // set indexes for top right
    let i = 0, j = n - 1;
    // element
 
    while (i < n && j >= 0)
    {
        if (mat[i][j] == x)
        {
            document.write("n Found at " +
                                    i + " " + j);
            return;
        }
        if (mat[i][j] > x)
            j--;
        else // if mat[i][j] < x
            i++;
    }
 
    document.write("n Element not found");
    return; // if ( i==n || j== -1 )
}

// Time Complexity: O(n). 
// Only one traversal is needed, i.e, i from 0 to n and j from n-1 to 0 with at most 2*n steps. 
// The above approach will also work for m x n matrix (not only for n x n). Complexity would be O(m + n). 