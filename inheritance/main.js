// $(window).on('load', function() {
  function Point1D (x, y) {
    this.x = x;

    this.get1DcoordsArray = function() {
      return [this.x];
    }
  };

  point1 = new Point1D(1);
  console.log('point 1D:');
  console.log(point1.x);
  console.log(point1.get1DcoordsArray());
  console.log(point1.constructor);

  function Point2D (x, y) {
    this.x = x;
    this.y = y;

    this.get2DcoordsArray = function() {
            return [this.x, this.y];
    }
  };
  Point2D.prototype = new Point1D();
  Point2D.prototype.constructor = Point2D;

  point2 = new Point2D(1, 2);
  console.log('point 2D:');
  console.log(point2.x);
  console.log(point2.get1DcoordsArray());

  console.log(point2.y);
  console.log(point2.get2DcoordsArray());
  console.log(point2.constructor);

  function Point3D (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.get3DcoordsArray = function() {
            return [this.x, this.y, this.z];
    }
  };
  Point3D.prototype = new Point2D();
  Point3D.prototype.constructor = Point3D;

  point3 = new Point3D(1, 2, 3);
  console.log('point 3D:');
  console.log(point3.x);
  console.log(point3.get1DcoordsArray());

  console.log(point3.y);
  console.log(point3.get2DcoordsArray());

  console.log(point3.z);
  console.log(point3.get3DcoordsArray());
  console.log(point3.constructor);
// })
