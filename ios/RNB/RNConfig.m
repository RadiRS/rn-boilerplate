//
//  RNConfig.m
//  RNB
//
//  Created by Radi Rusadi on 04/09/22.
//

#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport
{
#if DEV
  NSString *env = @"dev";
#elif STAG
  NSString *env = @"stag";
#else
  NSString *env = @"prod";
#endif
  
 return @{ @"env": env };
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
