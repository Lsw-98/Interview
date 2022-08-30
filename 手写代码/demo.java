import java.util.Arrays;
import java.util.Scanner;
import java.util.Collections;
public class s360 {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            int p = sc.nextInt();//平时成绩
            int q = sc.nextInt();//期末成绩
            Integer[] arr =new Integer[n];
            for (int i = 0; i < n; i++) {
                arr[i]=sc.nextInt();//期末成绩
            }
            Arrays.sort(arr, Collections.reverseOrder());
            int[] arr2= new int[n];
            for (int i = 0; i < n; i++) {
                arr2[i]=100-i;//平时成绩
            }
            int[] arr3=new int[n];
            int count=0;
            for (int i = 0; i < n; i++) {
                arr3[i]=(arr[i]*q+arr2[i]*p)/100;
                if (arr3[i]>=60) {
                    count++;
                }
            }

            System.out.println(count);
        }
}
