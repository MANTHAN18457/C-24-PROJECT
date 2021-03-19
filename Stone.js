class Stone{
	constructor(x,y,r)
	{
		var options = {
			'density':12,
			'friction':0.9,
			'restitution':1.3
		  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("yellow");
			fill("green");
			//draw the ellipse here to display the rubber ball
			ellipse(56, 46, 15, 15);

			pop()
	}

}