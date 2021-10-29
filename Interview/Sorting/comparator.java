class Checker implements Comparator<Player> {
  	// complete this method
	public int compare(Player a, Player b) {
        if(a.score<b.score) return 1;
        if(a.score>b.score) return -1;
        if(a.score==b.score){
            //int x;// a.name.compareTo(b.name);
            int i,min=Math.min(a.name.length(),b.name.length());
            for(i=0;(i<min)&&(a.name.charAt(i)==b.name.charAt(i));i++);
            if(i>=min){
                    if(i>=a.name.length())   return -1;
                    if(i>=b.name.length())   return 1;
                }
            if(a.name.charAt(i)<b.name.charAt(i))   return -1;
            if(a.name.charAt(i)==b.name.charAt(i))   return 0;
            if(a.name.charAt(i)>b.name.charAt(i))   return 1;
        }
        return -1;
    }
}
