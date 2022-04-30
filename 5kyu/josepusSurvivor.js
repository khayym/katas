function josephusSurvivor(n, k) {
    {
        if (n == 1)
            return 1;
        else {
            return (josephusSurvivor(n - 1, k) + k - 1) % n + 1;
        }

    }

}


console.log(josephusSurvivor(7, 3))

// Rearrange n = 2m + k to isolate k: k = n – 2m.
// Substitute this expression for k into w = 2k + 1
// josephus_survivor(7,3) => means 7 people in a circle;
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!