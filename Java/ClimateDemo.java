import java.io.*;
import java.util.Scanner;
class Climate{
	String date;
	String city;
	int temperature;
	int humidity;
	String status;
	
}
class ClimateDemo{
	public static void main(String[] args){
		try{
			String fileName = "Data.csv";
			File f1 = new File(fileName);
			Scanner sc = new Scanner(f1);

			int n = Integer.parseInt(sc.next().substring(0,2));
			String[] details= new String[n];
			int i=0;
			while(sc.hasNextLine() && i<n){
				String data = sc.nextLine();
				Climate c = new Climate();
				details[i++]=data;
			}
			for(int j=0;j<n;j++){
				System.out.println(details[j]);
			}
		}
		catch(FileNotFoundException e){
			System.out.println(e);
		}
		
	}
}