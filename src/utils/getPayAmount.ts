const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {  
    if ( isDead ) {
        return 1500;
    }
    if ( isSeparated ) {
        return 2500;
    }
    if ( isRetired ) {
        return 3000;
    }
    return 4000;
    // if ( isDead ) {
    //     result = 1500;
    // } else {
    //     if ( isSeparated ) {
    //         result = 2500;
    //     } else {
    //         if ( isRetired ) {
    //             result = 3000;
    //         } else {
    //             result = 4000; 
    //         }
    //     }
    // }
    
    
}