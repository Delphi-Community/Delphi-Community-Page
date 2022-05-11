# Anonymous Functions

```pascal
TprogressCallback = reference to function(current: SDK_INT4; total: SDK_INT4; job: SDK_INT4): SDK_INT4;  //Funktioniert unabhängig von der DLL
```