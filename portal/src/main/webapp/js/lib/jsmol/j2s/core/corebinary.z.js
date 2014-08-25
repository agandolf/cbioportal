(function(z,A,B,C,D,r,s,m,n,p,E,q,F,t,G,w,x,y,u,v,h,H,I,J,K,L,M,N,O,P,Q,R,S,T,k,U,V,W,X,Y,Z,$,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,e,d){m(["java.io.FilterInputStream"],"java.io.PushbackInputStream",["java.io.IOException","java.lang.IllegalArgumentException","$.IndexOutOfBoundsException","$.NullPointerException"],function(){c$=p(function(){this.buf=null;this.pos=0;n(this,arguments)},java.io,"PushbackInputStream",java.io.FilterInputStream);e(c$,"ensureOpen",function(){if(null==this.$in)throw new java.io.IOException("Stream closed");
});q(c$,function(a,b){v(this,java.io.PushbackInputStream,[a]);if(0>=b)throw new IllegalArgumentException("size <= 0");this.buf=h(b,0);this.pos=b},"java.io.InputStream,~N");d(c$,"readByteAsInt",function(){this.ensureOpen();return this.pos<this.buf.length?this.buf[this.pos++]&255:this.$in.readByteAsInt()});d(c$,"read",function(a,b,c){this.ensureOpen();if(null==a)throw new NullPointerException;if(0>b||0>c||c>a.length-b)throw new IndexOutOfBoundsException;if(0==c)return 0;var f=this.buf.length-this.pos;
0<f&&(c<f&&(f=c),System.arraycopy(this.buf,this.pos,a,b,f),this.pos+=f,b+=f,c-=f);return 0<c?(c=this.$in.read(a,b,c),-1==c?0==f?-1:f:f+c):f},"~A,~N,~N");e(c$,"unreadByte",function(a){this.ensureOpen();if(0==this.pos)throw new java.io.IOException("Push back buffer is full");this.buf[--this.pos]=a},"~N");e(c$,"unread",function(a,b,c){this.ensureOpen();if(c>this.pos)throw new java.io.IOException("Push back buffer is full");this.pos-=c;System.arraycopy(a,b,this.buf,this.pos,c)},"~A,~N,~N");d(c$,"available",
function(){this.ensureOpen();var a=this.buf.length-this.pos,b=this.$in.available();return a>2147483647-b?2147483647:a+b});d(c$,"skip",function(a){this.ensureOpen();if(0>=a)return 0;var b=this.buf.length-this.pos;0<b&&(a<b&&(b=a),this.pos+=b,a-=b);0<a&&(b+=this.$in.skip(a));return b},"~N");d(c$,"markSupported",function(){return!1});d(c$,"mark",function(){},"~N");d(c$,"reset",function(){throw new java.io.IOException("mark/reset not supported");});d(c$,"close",function(){null!=this.$in&&(this.$in.close(),
this.buf=this.$in=null)})});m(["java.io.DataInput","$.FilterInputStream"],"java.io.DataInputStream","java.io.EOFException $.PushbackInputStream $.UTFDataFormatException java.lang.Double $.Float $.IndexOutOfBoundsException".split(" "),function(){c$=p(function(){this.lineBuffer=this.readBuffer=this.chararr=this.bytearr=null;n(this,arguments)},java.io,"DataInputStream",java.io.FilterInputStream,java.io.DataInput);u(c$,function(){this.bytearr=h(80,0);this.chararr=k(80,"\x00");this.readBuffer=h(8,0)});
d(c$,"read",function(a,b,c){return this.$in.read(a,b,c)},"~A,~N,~N");e(c$,"readFully",function(a,b,c){if(0>c)throw new IndexOutOfBoundsException;for(var f=0;f<c;){var d=this.$in.read(a,b+f,c-f);if(0>d)throw new java.io.EOFException;f+=d}},"~A,~N,~N");d(c$,"skipBytes",function(a){for(var b=0,c=0;b<a&&0<(c=this.$in.skip(a-b));)b+=c;return b},"~N");d(c$,"readBoolean",function(){var a=this.$in.readByteAsInt();if(0>a)throw new java.io.EOFException;return 0!=a});d(c$,"readByte",function(){var a=this.$in.readByteAsInt();
if(0>a)throw new java.io.EOFException;return a});d(c$,"readUnsignedByte",function(){var a=this.$in.readByteAsInt();if(0>a)throw new java.io.EOFException;return a});d(c$,"readShort",function(){var a=this.$in.readByteAsInt(),b=this.$in.readByteAsInt();if(0>(a|b))throw new java.io.EOFException;a=(a<<8)+(b<<0);return 32767<a?a-65536:a});e(c$,"readUnsignedShort",function(){var a=this.$in.readByteAsInt(),b=this.$in.readByteAsInt();if(0>(a|b))throw new java.io.EOFException;return(a<<8)+(b<<0)});d(c$,"readChar",
function(){var a=this.$in.readByteAsInt(),b=this.$in.readByteAsInt();if(0>(a|b))throw new java.io.EOFException;return String.fromCharCode((a<<8)+(b<<0))});d(c$,"readInt",function(){var a=this.$in.readByteAsInt(),b=this.$in.readByteAsInt(),c=this.$in.readByteAsInt(),f=this.$in.readByteAsInt();if(0>(a|b|c|f))throw new java.io.EOFException;a=(a<<24)+(b<<16)+(c<<8)+(f<<0);return 2147483647<a?a-4294967296:a});d(c$,"readLong",function(){this.readFully(this.readBuffer,0,8);return(this.readBuffer[0]<<56)+
((this.readBuffer[1]&255)<<48)+((this.readBuffer[2]&255)<<40)+((this.readBuffer[3]&255)<<32)+((this.readBuffer[4]&255)<<24)+((this.readBuffer[5]&255)<<16)+((this.readBuffer[6]&255)<<8)+((this.readBuffer[7]&255)<<0)});d(c$,"readFloat",function(){return Float.intBitsToFloat(this.readInt())});d(c$,"readDouble",function(){return Double.longBitsToDouble(this.readLong())});d(c$,"readLine",function(){var a=this.lineBuffer;null==a&&(a=this.lineBuffer=k(128,"\x00"));var b=a.length,c=0,f;a:for(;;)switch(f=
this.$in.readByteAsInt()){case -1:case "\n":break a;case "\r":b=this.$in.readByteAsInt();10!=b&&-1!=b&&(s(this.$in,java.io.PushbackInputStream)||(this.$in=new java.io.PushbackInputStream(this.$in,1)),this.$in.unreadByte(b));break a;default:0>--b&&(a=k(c+128,"\x00"),b=a.length-c-1,System.arraycopy(this.lineBuffer,0,a,0,c),this.lineBuffer=a),a[c++]=String.fromCharCode(f)}return-1==f&&0==c?null:String.copyValueOf(a,0,c)});d(c$,"readUTF",function(){return java.io.DataInputStream.readUTFBytes(this,-1)});
c$.readUTFBytes=e(c$,"readUTFBytes",function(a,b){var c=0<=b;c||(b=a.readUnsignedShort());var f=null,d=null;s(a,java.io.DataInputStream)?(a.bytearr.length<b&&(a.bytearr=h(c?b:2*b,0),a.chararr=k(a.bytearr.length,"\x00")),d=a.chararr,f=a.bytearr):(f=h(b,0),d=k(b,"\x00"));var e,j,g=0,l=0;for(a.readFully(f,0,b);g<b;){c=f[g]&255;if(127<c)break;g++;d[l++]=String.fromCharCode(c)}for(;g<b;)switch(c=f[g]&255,c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:g++;d[l++]=String.fromCharCode(c);break;
case 12:case 13:g+=2;if(g>b)throw new java.io.UTFDataFormatException("malformed input: partial character at end");e=f[g-1];if(128!=(e&192))throw new java.io.UTFDataFormatException("malformed input around byte "+g);d[l++]=String.fromCharCode((c&31)<<6|e&63);break;case 14:g+=3;if(g>b)throw new java.io.UTFDataFormatException("malformed input: partial character at end");e=f[g-2];j=f[g-1];if(128!=(e&192)||128!=(j&192))throw new java.io.UTFDataFormatException("malformed input around byte "+(g-1));d[l++]=
String.fromCharCode((c&15)<<12|(e&63)<<6|(j&63)<<0);break;default:throw new java.io.UTFDataFormatException("malformed input around byte "+g);}return String.instantialize(d,0,l)},"java.io.DataInput,~N")});r("JU");c$=y(JU,"BC");q(c$,function(){});c$.bytesToFloat=e(c$,"bytesToFloat",function(a,b,c){return JU.BC.intToFloat(JU.BC.bytesToInt(a,b,c))},"~A,~N,~B");c$.bytesToInt=e(c$,"bytesToInt",function(a,b,c){a=c?a[b+3]&255|(a[b+2]&255)<<8|(a[b+1]&255)<<16|(a[b]&255)<<24:a[b++]&255|(a[b++]&255)<<8|(a[b++]&
255)<<16|(a[b++]&255)<<24;return 2147483647<a?a-4294967296:a},"~A,~N,~B");c$.intToFloat=e(c$,"intToFloat",function(a){if(0==a)return 0;var b=JU.BC;null==b.fracIEEE&&b.setFracIEEE();return(0==(a&2147483648)?1:-1)*b.shiftIEEE(a&8388607|8388608,((a&2139095040)>>23)-149)},"~N");c$.bytesToDoubleToFloat=e(c$,"bytesToDoubleToFloat",function(a,b,c){null==JU.BC.fracIEEE&&JU.BC.setFracIEEE();var d=JU.BC,e,h,j;c?(c=a[b]&255,e=a[b+1]&255,h=a[b+2]&255,j=a[b+3]&255,a=a[b+4]&255):(c=a[b+7]&255,e=a[b+6]&255,h=a[b+
5]&255,j=a[b+4]&255,a=a[b+3]&255);b=((c&127)<<4|e>>4)-1026;return(0==(c&128)?1:-1)*(d.shiftIEEE(e&15|16,b)+d.shiftIEEE(h,b-8)+d.shiftIEEE(j,b-16)+d.shiftIEEE(a,b-24))},"~A,~N,~B");c$.setFracIEEE=e(c$,"setFracIEEE",function(){JU.BC.fracIEEE=x(270,0);for(var a=0;270>a;a++)JU.BC.fracIEEE[a]=Math.pow(2,a-141)});c$.shiftIEEE=e(c$,"shiftIEEE",function(a,b){return 0==a||-140>b?0:128<b?3.4028235E38:a*JU.BC.fracIEEE[b+140]},"~N,~N");w(c$,"fracIEEE",null);r("JU");m(["javajs.api.GenericBinaryDocument","JU.BC"],
"JU.BinaryDocument",["java.io.DataInputStream","java.lang.Double"],function(){c$=p(function(){this.stream=null;this.isRandom=!1;this.isBigEndian=!0;this.t8=null;this.nBytes=0;this.out=null;n(this,arguments)},JU,"BinaryDocument",JU.BC,javajs.api.GenericBinaryDocument);u(c$,function(){this.t8=h(8,0)});q(c$,function(){v(this,JU.BinaryDocument,[])});d(c$,"close",function(){if(null!=this.stream)try{this.stream.close()}catch(a){if(!t(a,Exception))throw a;}null!=this.out&&this.out.closeChannel()});d(c$,
"setStream",function(a,b){null!=a&&(this.stream=new java.io.DataInputStream(a));this.isBigEndian=b},"java.io.BufferedInputStream,~B");d(c$,"setStreamData",function(a,b){null!=a&&(this.stream=a);this.isBigEndian=b},"java.io.DataInputStream,~B");e(c$,"setRandom",function(a){this.isRandom=a},"~B");d(c$,"readByte",function(){this.nBytes++;return this.ioReadByte()});e(c$,"ioReadByte",function(){var a=this.stream.readByte();null!=this.out&&this.out.writeByteAsInt(a);return a});d(c$,"readByteArray",function(a,
b,c){b=this.ioRead(a,b,c);0<b&&(this.nBytes+=b);var d=b;if(0<b&&b<c)for(;d<c&&0<b;)b=this.ioRead(a,d,c-d),0<b&&(this.nBytes+=b,d+=b);return d},"~A,~N,~N");e(c$,"ioRead",function(a,b,c){c=this.stream.read(a,b,c);0<c&&null!=this.out&&this.writeBytes(a,b,c);return c},"~A,~N,~N");e(c$,"writeBytes",function(a,b,c){this.out.write(a,b,c)},"~A,~N,~N");d(c$,"readString",function(a){var b=h(a,0);a=this.readByteArray(b,0,a);return String.instantialize(b,0,a,"UTF-8")},"~N");d(c$,"readShort",function(){this.nBytes+=
2;var a=this.isBigEndian?this.ioReadShort():this.ioReadByte()&255|(this.ioReadByte()&255)<<8;return 32767<a?a-65536:a});e(c$,"ioReadShort",function(){var a=this.stream.readShort();null!=this.out&&this.writeShort(a);return a});e(c$,"writeShort",function(a){this.out.writeByteAsInt(a>>8);this.out.writeByteAsInt(a)},"~N");d(c$,"readIntLE",function(){this.nBytes+=4;return this.readLEInt()});d(c$,"readInt",function(){this.nBytes+=4;return this.isBigEndian?this.ioReadInt():this.readLEInt()});e(c$,"ioReadInt",
function(){var a=this.stream.readInt();null!=this.out&&this.writeInt(a);return a});e(c$,"writeInt",function(a){this.out.writeByteAsInt(a>>24);this.out.writeByteAsInt(a>>16);this.out.writeByteAsInt(a>>8);this.out.writeByteAsInt(a)},"~N");d(c$,"swapBytesI",function(a){return a>>24&255|(a>>16&255)<<8|(a>>8&255)<<16|(a&255)<<24},"~N");d(c$,"swapBytesS",function(a){return a>>8&255|(a&255)<<8},"~N");d(c$,"readUnsignedShort",function(){this.nBytes+=2;var a=this.ioReadByte()&255,b=this.ioReadByte()&255;return this.isBigEndian?
(a<<8)+b:(b<<8)+a});d(c$,"readLong",function(){this.nBytes+=8;return this.isBigEndian?this.ioReadLong():this.ioReadByte()&255|(this.ioReadByte()&255)<<8|(this.ioReadByte()&255)<<16|(this.ioReadByte()&255)<<24|(this.ioReadByte()&255)<<32|(this.ioReadByte()&255)<<40|(this.ioReadByte()&255)<<48|(this.ioReadByte()&255)<<54});e(c$,"ioReadLong",function(){var a=this.stream.readLong();null!=this.out&&this.writeLong(a);return a});e(c$,"writeLong",function(a){this.writeInt(a>>32&4294967295);this.writeInt(a&
4294967295)},"~N");e(c$,"readLEInt",function(){this.ioRead(this.t8,0,4);return JU.BC.bytesToInt(this.t8,0,!1)});d(c$,"readFloat",function(){return JU.BC.intToFloat(this.readInt())});d(c$,"readDouble",function(){this.readByteArray(this.t8,0,8);return this.bytesToDoubleToFloat(this.t8,0,this.isBigEndian)});e(c$,"ioReadDouble",function(){var a=this.stream.readDouble();null!=this.out&&this.writeLong(Double.doubleToRawLongBits(a));return a});e(c$,"readLELong",function(){return this.ioReadByte()&255|(this.ioReadByte()&
255)<<8|(this.ioReadByte()&255)<<16|(this.ioReadByte()&255)<<24|(this.ioReadByte()&255)<<32|(this.ioReadByte()&255)<<40|(this.ioReadByte()&255)<<48|(this.ioReadByte()&255)<<56});d(c$,"seek",function(a){try{a!=this.nBytes&&(a<this.nBytes?(this.stream.reset(),null!=this.out&&0!=this.nBytes&&this.out.reset(),this.nBytes=0):a-=this.nBytes,null==this.out?this.stream.skipBytes(a):this.readByteArray(h(a,0),0,a),this.nBytes+=a)}catch(b){if(t(b,Exception))System.out.println(b.toString());else throw b;}},"~N");
d(c$,"getPosition",function(){return this.nBytes});d(c$,"setOutputChannel",function(a){this.out=a},"JU.OC");d(c$,"getAllDataFiles",function(){return null},"~S,~S");d(c$,"getAllDataMapped",function(){},"~S,~S,java.util.Map")})})(Clazz,Clazz.newLongArray,Clazz.doubleToByte,Clazz.doubleToInt,Clazz.doubleToLong,Clazz.declarePackage,Clazz.instanceOf,Clazz.load,Clazz.instantialize,Clazz.decorateAsClass,Clazz.floatToInt,Clazz.makeConstructor,Clazz.defineEnumConstant,Clazz.exceptionOf,Clazz.newIntArray,Clazz.defineStatics,
Clazz.newFloatArray,Clazz.declareType,Clazz.prepareFields,Clazz.superConstructor,Clazz.newByteArray,Clazz.declareInterface,Clazz.p0p,Clazz.pu$h,Clazz.newShortArray,Clazz.innerTypeInstance,Clazz.isClassDefined,Clazz.prepareCallback,Clazz.newArray,Clazz.castNullAs,Clazz.floatToShort,Clazz.superCall,Clazz.decorateAsType,Clazz.newBooleanArray,Clazz.newCharArray,Clazz.implementOf,Clazz.newDoubleArray,Clazz.overrideConstructor,Clazz.clone,Clazz.doubleToShort,Clazz.getInheritedLevel,Clazz.getParamsType,
Clazz.isAF,Clazz.isAI,Clazz.isAS,Clazz.isASS,Clazz.isAP,Clazz.isAFloat,Clazz.isAII,Clazz.isAFF,Clazz.isAFFF,Clazz.tryToSearchAndExecute,Clazz.getStackTrace,Clazz.inheritArgs,Clazz.alert,Clazz.defineMethod,Clazz.overrideMethod,Clazz.declareAnonymous,Clazz.cloneFinals);
