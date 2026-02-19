import Point from './point';

class GeometryUtil {

    getLineLength(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    getAngle(pointA, pointB) {
        // set pointA as origin;
        const dx = pointB.x - pointA.x;
        const dy = pointB.y - pointA.y;
        let theta = Math.atan2(-dy, dx);
        // turn it clockwise, since our coordinate system is
        // upside down, so; theta = -theta;
        if (theta < 0) {
            theta += 2 * Math.PI;
        }
        return theta;
    }
    rotate(origin, point, theta) {
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        let x = point.x * cos - point.y * sin;
        let y = point.y * cos + point.x * sin;
        return new Point(x, y);
    }

    pointIntersectsLine(checkPoint, lineStart, lineEnd, leeway) {
        const o = new Point(0, 0);
        const lineAngle = this.getAngle(lineStart, lineEnd);
        const newLineEnd = this.rotate(o, lineEnd, lineAngle);
        const newLineStart = this.rotate(o, lineStart, lineAngle);
        const newPoint = this.rotate(o, checkPoint, lineAngle);
        if (
            newPoint.x <= Math.max(newLineStart.x, newLineEnd.x) &&
            newPoint.x >= Math.min(newLineStart.x, newLineEnd.x) &&
            newPoint.y <= newLineStart.y + leeway / 2 &&
            newPoint.y >= newLineEnd.y - leeway / 2
        ) {
            return true;
        } else {
            return false;
        }
    }
}

export default GeometryUtil;
