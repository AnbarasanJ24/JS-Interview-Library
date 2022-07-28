/**
 * Assume  we have array of good and bad version [G, G, G, B, B, B] and a function which tell the version is good or bad
 * we need to find from where the version the version went bad
 * we can call the version from 0 to given version linearly, but it will take O (N)
 * Since the Good and Bad version is sorted, we can find it uisng Binary search
 */

// Youtube Link https://www.youtube.com/watch?v=SiDMFIMldgg

/**
 * Let keep left as zero and right as version, we need to run a loop from left to right
 * Now find the mid, If the mid is bad then there is chance current mid will be bad or left of it will be bad
 * Here [G, G, G, B, B, B] assume index 4 is bad then there is a chance bad can be index 3 also, so move right = mid -1
 * If the mid is good version, then for sure the bad version will on the right side mid, so left = mid +1
 * At last right will be moved to Good and left will be at bad version, based on that return the answer
 */


function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1

    let left = 0;
    let right = version;

    while(left <= right){
      let mid = Math.floor((left+right)/2);
      if(isBad(mid)){
        right = mid -1;
      }else{
        left = mid +1;
      }
    }

    return isBad(left)? left : -1;
  }
}