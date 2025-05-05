---
theme: [deep-space, wide]
title: Quick Reference
toc: true,
---

<body>

# Programming Language Data Types Reference

This document provides a comprehensive reference of built-in data types across multiple programming languages. It covers Python, PostgreSQL, JavaScript, C, C++, Rust, and Mojo.

## Python

### Numeric Types
- **int**: Integer of unlimited precision
- **float**: Double-precision floating-point number
- **complex**: Complex number with real and imaginary parts

### Sequence Types
- **str**: Immutable sequence of Unicode characters
- **list**: Mutable sequence of objects
- **tuple**: Immutable sequence of objects
- **range**: Immutable sequence of numbers

### Mapping Type
- **dict**: Mutable mapping of keys to values

### Set Types
- **set**: Mutable unordered collection of unique objects
- **frozenset**: Immutable unordered collection of unique objects

### Boolean Type
- **bool**: Truth value (True or False)

### Binary Types
- **bytes**: Immutable sequence of bytes
- **bytearray**: Mutable sequence of bytes
- **memoryview**: Memory view of a bytes-like object

### None Type
- **NoneType**: Represents the absence of a value (None)

## PostgreSQL

### Numeric Types
- **smallint**: 2-byte signed integer (-32,768 to 32,767)
- **integer** / **int**: 4-byte signed integer (-2,147,483,648 to 2,147,483,647)
- **bigint**: 8-byte signed integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
- **decimal** / **numeric**: Exact numeric with selectable precision
- **real**: 4-byte floating-point number (6 decimal digits precision)
- **double precision**: 8-byte floating-point number (15 decimal digits precision)
- **serial**: 4-byte autoincrementing integer
- **bigserial**: 8-byte autoincrementing integer
- **smallserial**: 2-byte autoincrementing integer
- **money**: Currency amount (fixed precision)

### Character Types
- **character** / **char(n)**: Fixed-length character string
- **character varying** / **varchar(n)**: Variable-length character string with limit
- **text**: Variable-length character string without limit

### Binary Data Types
- **bytea**: Binary data ("byte array")

### Date/Time Types
- **timestamp**: Date and time (without time zone)
- **timestamp with time zone** / **timestamptz**: Date and time with time zone
- **date**: Date (no time of day)
- **time**: Time of day (no date)
- **time with time zone** / **timetz**: Time of day with time zone
- **interval**: Time interval

### Boolean Type
- **boolean**: Logical boolean (true/false)

### Enumerated Type
- **enum**: User-defined enumerated types

### Geometric Types
- **point**: Point on a plane (x,y)
- **line**: Infinite line
- **lseg**: Line segment
- **box**: Rectangular box
- **path**: Closed path (similar to polygon)
- **polygon**: Polygon
- **circle**: Circle (center point and radius)

### Network Address Types
- **cidr**: IPv4 or IPv6 network address
- **inet**: IPv4 or IPv6 host address with optional netmask
- **macaddr**: MAC address
- **macaddr8**: MAC address (EUI-64 format)

### JSON Types
- **json**: JSON data stored as exact copy of input text
- **jsonb**: JSON data stored in a decomposed binary format

### Arrays
- **array**: Array of any data type

### UUID Type
- **uuid**: Universally Unique Identifier (128-bit)

### XML Type
- **xml**: XML data

### Range Types
- **int4range**: Range of integers
- **int8range**: Range of bigints
- **numrange**: Range of numeric
- **tsrange**: Range of timestamp without time zone
- **tstzrange**: Range of timestamp with time zone
- **daterange**: Range of date

### Others
- **tsvector**: Text search document
- **tsquery**: Text search query
- **pg_lsn**: PostgreSQL Log Sequence Number
- **txid_snapshot**: User-level transaction ID snapshot

## JavaScript

### Primitive Data Types
- **Number**: 64-bit floating-point numbers (includes integers and floating-point values)
- **BigInt**: Arbitrary precision integers (suffix with 'n', e.g., `123n`)
- **String**: Sequence of characters (text)
- **Boolean**: Logical entity (`true` or `false`)
- **undefined**: Represents a variable that has been declared but not assigned a value
- **null**: Represents the intentional absence of any object value
- **Symbol**: Unique and immutable primitive value (ES6+)

### Object Types
- **Object**: Collection of properties (key-value pairs)
- **Array**: Ordered list of values
- **Function**: Callable object that executes a block of code
- **Date**: Represents dates and times
- **RegExp**: Regular expressions for pattern matching
- **Map**: Collection of key-value pairs where keys can be of any type
- **Set**: Collection of unique values of any type
- **WeakMap**: Collection of key-value pairs where keys must be objects
- **WeakSet**: Collection of objects only
- **ArrayBuffer**: Fixed-length raw binary data buffer
- **SharedArrayBuffer**: Fixed-length raw binary data buffer that can be shared across workers
- **DataView**: Interface for reading/writing multiple number types in an ArrayBuffer
- **TypedArray**: Array-like views of binary data buffers (Int8Array, Uint8Array, etc.)
- **Promise**: Represents the eventual completion of an asynchronous operation
- **Intl**: Namespace for ECMAScript Internationalization API

### Typed Arrays
- **Int8Array**: 8-bit signed integer array
- **Uint8Array**: 8-bit unsigned integer array
- **Uint8ClampedArray**: 8-bit unsigned integer array (clamped)
- **Int16Array**: 16-bit signed integer array
- **Uint16Array**: 16-bit unsigned integer array
- **Int32Array**: 32-bit signed integer array
- **Uint32Array**: 32-bit unsigned integer array
- **Float32Array**: 32-bit floating-point array
- **Float64Array**: 64-bit floating-point array
- **BigInt64Array**: 64-bit signed integer array
- **BigUint64Array**: 64-bit unsigned integer array

## C

### Basic Types
- **char**: Single character (1 byte)
- **signed char**: Signed character (-128 to 127)
- **unsigned char**: Unsigned character (0 to 255)
- **short** / **short int** / **signed short** / **signed short int**: Short integer (usually 2 bytes)
- **unsigned short** / **unsigned short int**: Unsigned short integer
- **int** / **signed** / **signed int**: Integer (typically 4 bytes)
- **unsigned** / **unsigned int**: Unsigned integer
- **long** / **long int** / **signed long** / **signed long int**: Long integer (at least 4 bytes)
- **unsigned long** / **unsigned long int**: Unsigned long integer
- **long long** / **long long int** / **signed long long** / **signed long long int**: Long long integer (at least 8 bytes)
- **unsigned long long** / **unsigned long long int**: Unsigned long long integer
- **float**: Single-precision floating-point (typically 4 bytes)
- **double**: Double-precision floating-point (typically 8 bytes)
- **long double**: Extended-precision floating-point

### Void Type
- **void**: Represents the absence of type

### Derived Types
- **Array**: Collection of similar types
- **Function**: Function type
- **Pointer**: Holds memory address
- **Structure**: Collection of variables of different types
- **Union**: Special data type that can hold different data types in the same memory location
- **Enum**: Enumeration type
- **Bit-Field**: Special form of structure member that uses a specified number of bits

### C99 and Later Additions
- **_Bool** (C99): Boolean type (replaced by `bool` in C23)
- **_Complex** (C99): Complex number type
- **_Imaginary** (C99): Imaginary number type
- Fixed-width integer types from `<stdint.h>` (C99):
  - **int8_t**, **int16_t**, **int32_t**, **int64_t**: Signed integers of exact width
  - **uint8_t**, **uint16_t**, **uint32_t**, **uint64_t**: Unsigned integers of exact width
  - **intptr_t**, **uintptr_t**: Integers capable of holding a pointer

## C++

### Fundamental Types
- **bool**: Boolean type (true or false)
- **char**: Character (usually 1 byte)
- **char8_t** (C++20): UTF-8 character
- **char16_t** (C++11): UTF-16 character
- **char32_t** (C++11): UTF-32 character
- **wchar_t**: Wide character
- **signed char**: Signed character
- **unsigned char**: Unsigned character
- **short** / **short int** / **signed short** / **signed short int**: Short integer
- **unsigned short** / **unsigned short int**: Unsigned short integer
- **int** / **signed** / **signed int**: Integer
- **unsigned** / **unsigned int**: Unsigned integer
- **long** / **long int** / **signed long** / **signed long int**: Long integer
- **unsigned long** / **unsigned long int**: Unsigned long integer
- **long long** / **long long int** / **signed long long** / **signed long long int** (C++11): Long long integer
- **unsigned long long** / **unsigned long long int** (C++11): Unsigned long long integer
- **float**: Single-precision floating-point
- **double**: Double-precision floating-point
- **long double**: Extended-precision floating-point
- **void**: Represents absence of type

### Compound Types
- **Reference Types**:
  - **T&**: Lvalue reference to type T
  - **T&&** (C++11): Rvalue reference to type T
- **Pointer Types**:
  - **T***: Pointer to type T
  - **T* const**: Constant pointer to type T
  - **const T***: Pointer to constant T
  - **const T* const**: Constant pointer to constant T
- **Array Types**: Fixed-size sequence of elements
- **Function Types**: Function type
- **Enumeration Types**:
  - **enum**: Traditional C-style enumeration
  - **enum class** / **enum struct** (C++11): Scoped enumeration
- **Class Types**:
  - **class**: User-defined type with default private members
  - **struct**: User-defined type with default public members
  - **union**: Special class type that can hold different data types in the same memory location

### Standard Library Types
- **std::string**: String of characters
- **std::wstring**: String of wide characters
- **std::u8string** (C++20): String of UTF-8 characters
- **std::u16string** (C++11): String of UTF-16 characters
- **std::u32string** (C++11): String of UTF-32 characters
- **std::array** (C++11): Fixed-size array
- **std::vector**: Dynamic array
- **std::list**: Doubly-linked list
- **std::forward_list** (C++11): Singly-linked list
- **std::deque**: Double-ended queue
- **std::queue**: FIFO queue
- **std::priority_queue**: Priority queue
- **std::stack**: LIFO stack
- **std::set**: Collection of unique keys
- **std::multiset**: Collection of keys
- **std::map**: Collection of key-value pairs with unique keys
- **std::multimap**: Collection of key-value pairs
- **std::unordered_set** (C++11): Hash table of unique keys
- **std::unordered_multiset** (C++11): Hash table of keys
- **std::unordered_map** (C++11): Hash table of key-value pairs with unique keys
- **std::unordered_multimap** (C++11): Hash table of key-value pairs
- **std::tuple** (C++11): Fixed-size collection of heterogeneous values
- **std::pair**: Two heterogeneous values
- **std::optional** (C++17): May or may not contain a value
- **std::variant** (C++17): Type-safe union
- **std::any** (C++17): Type-safe container for single values of any type
- **std::function** (C++11): Polymorphic function wrapper
- **std::shared_ptr** (C++11): Shared ownership smart pointer
- **std::unique_ptr** (C++11): Exclusive ownership smart pointer
- **std::weak_ptr** (C++11): Non-owning observer smart pointer
- **std::atomic** (C++11): Atomic types for concurrent programming
- **std::thread** (C++11): Thread class
- **std::mutex** (C++11): Mutual exclusion primitive
- **std::future** (C++11): Asynchronous result container
- **std::promise** (C++11): Asynchronous provider container
- **std::chrono::time_point** (C++11): Point in time
- **std::chrono::duration** (C++11): Time duration
- **std::filesystem::path** (C++17): File system path

## Rust

### Scalar Types
- **i8, i16, i32, i64, i128**: Signed integers (8, 16, 32, 64, 128 bits)
- **u8, u16, u32, u64, u128**: Unsigned integers (8, 16, 32, 64, 128 bits)
- **isize, usize**: Pointer-sized integers (depends on architecture)
- **f32, f64**: Floating-point numbers (32, 64 bits)
- **bool**: Boolean type (true or false)
- **char**: Unicode scalar value (4 bytes)

### Compound Types
- **Arrays**: Fixed-size collection of same-type elements: `[T; N]`
- **Tuples**: Fixed-size collection of values of different types: `(T1, T2, ...)`
- **Slices**: Dynamically-sized view into a contiguous sequence: `&[T]` or `&mut [T]`

### Reference Types
- **&T**: Immutable reference to type T
- **&mut T**: Mutable reference to type T

### User-Defined Types
- **struct**: Custom data type with named fields
- **enum**: Custom type allowing multiple variants
- **union**: Low-level representation of an enum (unsafe)

### Trait Objects
- **&dyn Trait**: Reference to a type implementing the Trait
- **Box<dyn Trait>**: Owned value implementing the Trait

### Function Types
- **fn(T1, T2, ...) -> R**: Function pointer type

### String Types
- **String**: Owned, growable UTF-8 encoded string
- **&str**: Borrowed string slice (immutable view into a String or string literal)
- **CStr, CString**: C-compatible strings

### Option and Result
- **Option<T>**: Represents an optional value (Some(T) or None)
- **Result<T, E>**: Represents success (Ok(T)) or failure (Err(E))

### Smart Pointers
- **Box<T>**: Owned pointer to heap-allocated data
- **Rc<T>**: Reference-counted pointer (shared ownership)
- **Arc<T>**: Atomically reference-counted pointer (thread-safe shared ownership)
- **Cell<T>**: Interior mutability for Copy types
- **RefCell<T>**: Interior mutability with runtime borrow checking
- **Mutex<T>**: Mutual exclusion primitive
- **RwLock<T>**: Reader-writer lock

### Never Type
- **!**: The "never" type for functions that never return

### Phantom Type
- **PhantomData<T>**: Zero-sized type used for type safety

### Standard Library Collections
- **Vec<T>**: Growable array
- **HashMap<K, V>**: Hash table mapping keys to values
- **HashSet<T>**: Collection of unique values
- **BTreeMap<K, V>**: Ordered map using a B-Tree
- **BTreeSet<T>**: Ordered set using a B-Tree
- **LinkedList<T>**: Doubly-linked list
- **VecDeque<T>**: Double-ended queue implemented with a growable ring buffer
- **BinaryHeap<T>**: Priority queue implemented with a binary heap

## Mojo

### Primitive Types
- **Int**: Integer type (default 64-bit)
- **Int8**: 8-bit signed integer
- **Int16**: 16-bit signed integer
- **Int32**: 32-bit signed integer
- **Int64**: 64-bit signed integer
- **UInt**: Unsigned integer type (default 64-bit)
- **UInt8**: 8-bit unsigned integer
- **UInt16**: 16-bit unsigned integer
- **UInt32**: 32-bit unsigned integer
- **UInt64**: 64-bit unsigned integer
- **Float**: Floating-point type (default 64-bit)
- **Float16**: 16-bit floating-point
- **Float32**: 32-bit floating-point
- **Float64**: 64-bit floating-point
- **Bool**: Boolean type (True or False)
- **String**: UTF-8 encoded text
- **SIMD**: Single Instruction Multiple Data type

### Reference Types
- **Reference[Type]**: Reference to a value (like a pointer)
- **OwnedReference[Type]**: Owned reference that guarantees no aliasing

### Optional Type
- **Optional[Type]**: Represents a value that might be None

### Container Types
- **List[Type]**: Mutable, dynamically-sized list of homogeneous values
- **Dict[KeyType, ValueType]**: Dictionary (hash map)
- **Set[Type]**: Collection of unique values
- **Tuple[Type1, Type2, ...]**: Immutable, fixed-size collection of heterogeneous values

### Specialized Types
- **StringLiteral**: Compile-time string literal type
- **DType**: Data type descriptor
- **Type[T]**: Type object (metaprogramming)
- **NoneType**: Type of None value

### Pointer Types
- **Pointer[Type]**: Raw pointer to a value
- **DTypePointer[Type]**: Typed raw pointer to a value with a specific data type

### Memory Types
- **Buffer**: Raw memory buffer
- **HeapArray[Type, Size]**: Fixed-size array allocated on the heap

### Tensor-Related Types
- **Tensor[Type, Size]**: Tensor type with specified element type and dimensions
- **TensorShape**: Shape of a tensor
- **TensorSlice**: Slice of a tensor

### Custom Types
- **struct**: User-defined type with named fields
- **trait**: Interface definition

---

</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>