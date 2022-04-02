# `graphql-code-generator` Codesabdbox template

You can use this repo in order to quickly create a template for reproducing issues related to `graphql-code-generator`. 

Demonstrates an out of memory situation with a gatsby wordpress schema for `typescript-operations`.

```bash
yarn generate   
yarn run v1.22.17
$ yarn codegen
$ graphql-codegen --config ./codegen.yml
(node:66908) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
  ✔ Parse configuration
  ❯ Generate outputs
    ❯ Generate types.ts
      ✔ Load GraphQL schemas
      ⠙ Load GraphQL documents
        Generate

<--- Last few GCs --->

[66686:0x150008000]   103001 ms: Mark-sweep (reduce) 4093.3 (4101.1) -> 4091.2 (4096.9) MB, 1.9 / 0.0 ms  (+ 27.6 ms in 7 steps since start of marking, biggest step 7.1 ms, walltime since start of marking 30 ms) (average mu = 0.386, current mu = 0.394) fi[66686:0x150008000]   103002 ms: Scavenge 4092.1 (4097.6) -> 4092.1 (4100.6) MB, 0.2 / 0.0 ms  (average mu = 0.386, current mu = 0.394) allocation failure 


<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x1005a446c node::Abort() [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
 2: 0x1005a45f4 node::errors::TryCatchScope::~TryCatchScope() [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
 3: 0x1006f27b4 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
 4: 0x1006f2748 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
 5: 0x100875c08 v8::internal::Heap::GarbageCollectionReasonToString(v8::internal::GarbageCollectionReason) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
 6: 0x100879210 v8::internal::Heap::CollectSharedGarbage(v8::internal::GarbageCollectionReason) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
 7: 0x1008763d0 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
 8: 0x100873cf8 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
 9: 0x100872b60 v8::internal::Heap::HandleGCRequest() [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
10: 0x100827ddc v8::internal::StackGuard::HandleInterrupts() [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
11: 0x100b874c4 v8::internal::Runtime_StackGuard(int, unsigned long*, v8::internal::Isolate*) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
12: 0x100e9c2ec Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
13: 0x100eb18cc Builtins_ArrayPrototypeJoin [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
14: 0x1052aaa3c 
15: 0x1051a9ed4 
16: 0x105308b94 
17: 0x1052a6918 
18: 0x1051a9ed4 
19: 0x105308b94 
20: 0x1052a6918 
21: 0x1051a9ed4 
22: 0x105308b94 
23: 0x1052a6918 
24: 0x1051a9ed4 
25: 0x105308b94 
26: 0x1052a6918 
27: 0x1051a9ed4 
28: 0x105308b94 
29: 0x1052a6918 
30: 0x1052f7208 
31: 0x100ebc298 Builtins_ArrayReduce [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
32: 0x100e2ff78 Builtins_InterpreterEntryTrampoline [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
33: 0x100e2ff78 Builtins_InterpreterEntryTrampoline [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
34: 0x100e2ff78 Builtins_InterpreterEntryTrampoline [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
35: 0x100e2ff78 Builtins_InterpreterEntryTrampoline [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
36: 0x100ebc298 Builtins_ArrayReduce [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
37: 0x100e2ff78 Builtins_InterpreterEntryTrampoline [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
38: 0x100e2ff78 Builtins_InterpreterEntryTrampoline [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
39: 0x100e2ff78 Builtins_InterpreterEntryTrampoline [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
40: 0x105321a5c 
41: 0x10528cbfc 
42: 0x100e2ff78 Builtins_InterpreterEntryTrampoline [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
43: 0x100e2ff78 Builtins_InterpreterEntryTrampoline [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
44: 0x10531bb9c 
45: 0x100ee4418 Builtins_PromiseFulfillReactionJob [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
46: 0x100e51954 Builtins_RunMicrotasks [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
47: 0x100e2dc44 Builtins_JSRunMicrotasksEntry [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
48: 0x100802450 v8::internal::(anonymous namespace)::Invoke(v8::internal::Isolate*, v8::internal::(anonymous namespace)::InvokeParams const&) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
49: 0x100802884 v8::internal::(anonymous namespace)::InvokeWithTryCatch(v8::internal::Isolate*, v8::internal::(anonymous namespace)::InvokeParams const&) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
50: 0x100802970 v8::internal::Execution::TryRunMicrotasks(v8::internal::Isolate*, v8::internal::MicrotaskQueue*, v8::internal::MaybeHandle<v8::internal::Object>*) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
51: 0x10082559c v8::internal::MicrotaskQueue::RunMicrotasks(v8::internal::Isolate*) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
52: 0x100825e30 v8::internal::MicrotaskQueue::PerformCheckpoint(v8::Isolate*) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
53: 0x1004f3d8c node::InternalCallbackScope::Close() [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
54: 0x1004f37c4 node::InternalCallbackScope::~InternalCallbackScope() [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
55: 0x1005a73dc node::fs::FileHandle::CloseReq::Resolve() [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
56: 0x1005ba10c node::fs::FileHandle::ClosePromise()::$_0::__invoke(uv_fs_s*) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
57: 0x100e0e3b0 uv__work_done [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
58: 0x100e11b10 uv__async_io [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
59: 0x100e23824 uv__io_poll [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
60: 0x100e11fa0 uv_run [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
61: 0x1004f4e00 node::SpinEventLoop(node::Environment*) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
62: 0x1005dd638 node::NodeMainInstance::Run(int*, node::Environment*) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
63: 0x1005dd304 node::NodeMainInstance::Run(node::EnvSerializeInfo const*) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
64: 0x1005762ec node::Start(int, char**) [/Users/Rainer.Burgstaller/.volta/tools/image/node/16.13.1/bin/node]
65: 0x104f4d088 

<--- Last few GCs --->

[66757:0x138008000]   102810 ms: Mark-sweep 4093.1 (4101.3) -> 4091.2 (4099.9) MB, 30.4 / 0.0 ms  (average mu = 0.218, current mu = 0.082) allocation failure scavenge might not succeed
[66757:0x138008000]   102842 ms: Mark-sweep 4093.2 (4101.3) -> 4091.2 (4099.9) MB, 30.7 / 0.0 ms  (average mu = 0.132, current mu = 0.032) allocation failure scavenge might not succeed
```